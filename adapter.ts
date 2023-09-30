

interface IMessageClient {
    sendMessage(channel: string, user: string, message: string): void;
}


class SlackClient {
    postMessageToUserInChannel(channel: string, user: string, message: string) {
        console.log(`Posting message to ${user} in ${channel} through Slack: ${message}`);
    }
}


class SlackAdapter implements IMessageClient {
    constructor(private slackClient: SlackClient) { }

    sendMessage(channel: string, user: string, message: string): void {
        this.slackClient.postMessageToUserInChannel(channel, user, message);
    }
}


class OutlookClient {

    postMessageToUserInChannel(channel: string, user: string, message: string) {
        console.log(`Posting message to ${user} in ${channel} through Outlook: ${message}`);
    }

}


class OutlookAdapter implements IMessageClient {
    constructor(private outlookClient: OutlookClient) { }

    sendMessage(channel: string, user: string, message: string): void {
        this.outlookClient.postMessageToUserInChannel(channel, user, message);
    }

}



const slackClient = new SlackClient()
const outlookClient = new OutlookClient()

const slackAdapter = new SlackAdapter(slackClient);
const outlookAdapter = new OutlookAdapter(outlookClient);

slackAdapter.sendMessage('channel', 'user', 'message');
outlookAdapter.sendMessage('channel', 'user', 'message');