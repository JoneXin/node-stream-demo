const { add, formater } = require("../utils/add");
const assert = require("assert");
const { randomUUID } = require("crypto");

describe("utils => function【add】test results:", () => {
    it("1 + 2 = 3", () => {
        assert.equal(add(1, 2), 3);
    });

    it("1 + null = 1", () => {
        assert.equal(add(1, null), 1);
    });

    it("1 + undefined = 1", () => {
        assert.equal(add(1, undefined), 1);
        assert.equal(add(1, undefined), 1);
    });

    it("1 +  = 1", () => {
        assert.equal(add(1, undefined), 1);
        assert.equal(add(1, undefined), 1);
    });
});

describe("utils => function【formater】test results:", () => {
    it("age < 20 will add yonger tag", () => {
        const personInfo = {
            name: "Jone Xin",
            age: 18,
            uid: randomUUID(),
        };

        assert.deepEqual(
            formater(Buffer.from(JSON.stringify(personInfo))),
            JSON.stringify({
                ...personInfo,
                name: `yonger pepole ${personInfo.name}`,
            })
        );
    });

    it("age >= 20 will be same", () => {
        const personInfo = {
            name: "Jone Xin",
            age: 20,
            uid: randomUUID(),
        };

        assert.equal(
            formater(Buffer.from(JSON.stringify(personInfo))),
            JSON.stringify({
                ...personInfo,
                name: `${personInfo.name}`,
            })
        );
    });

    it("invalid data struct will transform to ['invalid data']", () => {
        const personInfo = {
            name: "Jone Xin",
            age: NaN,
            uid: randomUUID(),
        };

        assert.equal(
            formater(Buffer.from(JSON.stringify(personInfo))),
            "[invalid data]"
        );
    });
});
