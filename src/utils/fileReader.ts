export async function readFile(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject('Reader Error.');
        reader.readAsText(file);
    });
}
