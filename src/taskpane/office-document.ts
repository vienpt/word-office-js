/* global Word */

/**
 * insert new paragraph
 * @param text
 */
export async function insertText(text: string) {
  await Word.run(async (context) => {
    let body = context.document.body;
    body.insertParagraph(text, Word.InsertLocation.end);

    await context.sync();
  });
}

export async function tryCatch(callback: () => any) {
  try {
    await callback();
  } catch (error) {
    throw new Error(error);
  }
}
