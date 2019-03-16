import AV from 'leancloud-storage'
import LeanCloudConfig from './secret'

export default {
    init() {
        AV.init(LeanCloudConfig);
    },
    addMessage(message) {
        const Message = AV.Object.extend('Message');
        const msgObj = new Message();
        msgObj.set('content', message);
        msgObj.save().then(function (resObj) {
            console.log('New message created with objectId: ' + resObj.id);
        }, function (error) {
            console.error('Failed to create new message, with error message: ' + error.message);
        });
    },
    getMessages(callback) {
        const query = new AV.Query('Message');
        query.ascending('createdAt');
        query.find().then((messages) => {
            callback(messages)
        })
    }
}