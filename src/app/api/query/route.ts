import "dotenv/config";
import { NextResponse, NextRequest } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { SqlDatabase } from "langchain/sql_db";
import { DataSource } from "typeorm";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export async function POST(req: NextRequest) {
  const { query, hostname, portId, username, password, database } =
    await req.json();
  try {
    const db = await SqlDatabase.fromDataSourceParams({
      appDataSource: new DataSource({
        type: "postgres",
        host: hostname || "localhost",
        port: Number(portId) || 5432,
        username: username || "postgres",
        password: password || "postgres",
        database: database || "postgres",
      }),
    });

    const model = new ChatGroq({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
    });

    const messages = [
      new SystemMessage(`
        Convert the statement into a Postgres SQL query. 
        Just the query itself, no other AI boilerplate.
        Remove unnecessary whitespace, but keep spaces between the commands so they still work.
        Ensure the entire query is on one line.
      `),
      new HumanMessage(query),
    ];

    const result = await model.invoke(messages);
    await db.run(result.content as string);

    return NextResponse.json({ success: true, query: result.content });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
