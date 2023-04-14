import fs from "fs";

export default function getModel(model: "java" | "bedrock" | "offline") {
	return fs.readFileSync(`src/assets/models/${model}.tson`, 'utf8');
}
