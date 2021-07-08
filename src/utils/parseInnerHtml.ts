const parseInnerHtml = (html: string) => {
  return html.replace('src="/', `src="${process.env.NEXT_PUBLIC_API_URL}/`);
};

export default parseInnerHtml;
