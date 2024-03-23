const CountdownTime = {
    hours: [],
    minutes: [],
    seconds: [],
};

for (let i = 0; i < 100; i++) {
    CountdownTime.hours.push({ key: i, text: i, value: i * 60 * 60 });
}

for (let i = 0; i < 60; i++) {
    CountdownTime.minutes.push({ key: i, text: i, value: i * 60 });
}

for (let i = 0; i < 60; i++) {
    CountdownTime.seconds.push({ key: i, text: i, value: i });
}

export default CountdownTime;