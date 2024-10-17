export const checkDownloadLimit = (req, res, next) => {
    const user = req.user; 

    if (user.isPremium || user.downloadCount < 1) {
        next(); // Consenti il download
    } else {
        return res.status(403).json({ message: "Download limit exceeded. Upgrade to premium." });
    }
};