import multer from "multer";



export const handleUlpoad = (distination = '', file = 'file', maxCount = 1) => {

    const storage = multer.diskStorage({
        // destination
        destination: (req, file, cb) => cb(null, `./wwwroot/${distination}`),
        filename: (req, file, cb) => cb(null, file.originalname)
    });

    return multer({ storage: storage }).array(file, maxCount);
}



// export const upload;