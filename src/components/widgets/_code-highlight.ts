import shiki from "shiki-es";
import type { Highlighter, Lang } from "shiki-es";

const cache: { [key: string]: Highlighter[] } = {};
async function getHighlighter(language: Lang) {
	if (!cache[language]) {
		cache[language] = await Promise.all(
			["github-dark", "github-light"].map((theme) =>
				shiki.getHighlighter({
					theme: theme,
					langs: [language],
				})
			)
		);
	}
	return cache[language];
}

export async function renderToHtml(language: Lang, code: string) {
	const highlighters = await getHighlighter(language);

	return highlighters.map((highlighter: shiki.Highlighter) => {
		const tokens = highlighter.codeToThemedTokens(code, language);

		return shiki.renderToHtml(tokens, {
			elements: {
				pre({ className, style, children }) {
					style = style.replace("background-color: #fff", "");
					return `<pre tabindex="1" class="${className} p-1" style="${style}">${children}</pre>`;
				},
			},
		});
	});
}
