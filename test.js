function testFn() {
    let facebookData = [];

    for (let i = 1; i <= 100; i++) {
        let facebook = {
            uid: i,
            facebookAds: "Tap. Tap. Tada! campaign - Lorem ipsum dolor sit amet.",
            type: null,
            ctr: (Math.random() * 2.25).toFixed(2),
            cpm: (Math.random() * 80).toFixed(2),
            cpc: (Math.random() * 16).toFixed(2),
            impressions: (Math.random() * 800000).toFixed(),
            spend: (Math.random() * 140000).toFixed(),
            sau: (Math.random() * 360000).toFixed(),
            sourcedARR: null,
            CPSAU: (Math.random() * 12).toFixed(2),
            lastTouchCPA: (i === 7 || i === 23 || i === 64) ? (Math.random() * 1000).toFixed(2) : null,
            viewThroughConversions: (i === 8 || i === 30 || i === 56) ? (Math.random() * 120).toFixed() : null,
            conversion: (i === 11 || i === 31 || i === 58) ? (Math.random() * 140).toFixed() : null,
        };

        facebookData.push(facebook);
    }

    console.log(facebookData.map((item) => item.conversion));
}

testFn();