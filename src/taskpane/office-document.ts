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

export async function getComments(): Promise<Word.Interfaces.CommentCollectionData> {
  let result: Word.Interfaces.CommentCollectionData;
  await Word.run(async (context) => {
    const comments = context.document.body.getComments();
    comments.load({});
    await context.sync();

    for (const comment of comments.items) {
      console.log(`Comment: ${comment.content}`);
      console.log(`Comment author: ${comment.authorName}`);

      const replies = comment.replies;
      replies.load();
      await context.sync();

      for (const reply of replies.items) {
        console.log(`Reply text: ${reply.content}`);
        console.log(`Reply author: ${reply.authorName}`);
        console.log(`Reply date: ${reply.creationDate}`);
      }
    }

    return (result = comments.toJSON());
  });

  return result;
}

export async function tryCatch(callback: () => Promise<any>) {
  try {
    return await callback();
  } catch (error) {
    throw new Error(error);
  }
}
