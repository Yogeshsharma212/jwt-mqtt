import mqtt from 'mqtt'

let client = mqtt.connect('http://localhost:1883');

client.on('connect',() => {
    console.log('client connected');

    client.subscribe('topic-node', (error) => {
        console.log("topic subscribed");
    });
});



client.on('message', (topic, message) => {
    console.log("hello")
    console.log('topic1: ', topic);
    console.log('message1: ', message.toString());
});

