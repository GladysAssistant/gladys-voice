
module.exports = {
    snowboy: {
        hotword: process.env.RECOGNITION_HOTWORD || 'gladys',
        resource: process.env.RECOGNITION_RESOURCE || './data/gladys.pmdl',
        sensitivity: process.env.RECOGNITION_SENSITIVITY || '0.5'
    },
    google: {
        projectId: process.env.GOOGLE_PROJECT_ID || 'your-project',
        keyFilename: process.env.GOOGLE_KEY_FILENAME || './data/your-google-file-key.json'
    },
    language: process.env.RECOGNITION_LANGUAGE ||'fr-FR',
    gladys: {
        gladysUrl: process.env.GLADYS_URL || 'http://localhost:8080',
        token: process.env.GLADYS_TOKEN || 'your-gladys-token'

    },
    sound: process.env.RECOGNITION_SOUND || './data/affirmative.mp3'
};
