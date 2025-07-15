import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const postData = JSON.parse(fileContents);

        return {
            ...postData
        };
    });

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
    const filepath = path.join(postsDirectory, `${slug}.json`);
    if(!fs.existsSync(filepath)) return null;
    const fileContent = await fs.promises.readFile(filepath, 'utf-8');
    return JSON.parse(fileContent);
}