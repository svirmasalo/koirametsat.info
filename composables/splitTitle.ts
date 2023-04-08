/**
 * This function splits the title of the .md document into parts and returns the first part.
 * This is used to remove the SEO-part from the title.
 * @param title = .md document title
 * @returns Parsed title or original title
 */
export const useParseTitle = (title: string) => {
    try {
        return title.split(' - ')[0];
      } catch (error) {
        return title;
      }
}