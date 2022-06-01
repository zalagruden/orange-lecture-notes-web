const fs = require('fs');
let postType = process.argv.at(2)
let folderName = process.argv.at(3)

if (!postType || ['books', 'chapters'].indexOf(postType) === -1) {
    throw 'Please specify a post type: "book" or "chapter"';
}
if (!folderName) {
    console.log('Please provide a folder name as an argument.')
    return;
}

fs.mkdir(`./posts/${postType}/${folderName}/`, { recursive: true }, (err) => {
    if (err) throw err;

    fs.copyFile(
        `./posts/${postType}/boilerplate.md`,
        `./posts/${postType}/${folderName}/index.md`,
        (err) => {
            if (err) throw err;
            console.log(`New book ${folderName} was created.`);
        }
    );
});