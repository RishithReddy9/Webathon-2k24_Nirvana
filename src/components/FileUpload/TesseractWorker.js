// tesseractWorker.js
import { createWorker } from "tesseract.js";

const initializeWorker = async () => {
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    return worker;
};

export default initializeWorker;
