function add(a, b) {
    a = a || 0;
    b = b || 0;

    return a + b;
}

function formater(chunk) {
    const data = chunk.toString();

    try {
        const info = JSON.parse(data);

        if (!info?.age || typeof info.age !== "number") {
            return "[invalid data]";
        }

        if (info.age < 20) {
            return JSON.stringify({
                ...info,
                name: `yonger pepole ${info?.name}`,
            });
        }

        return data;
    } catch (_) {
        console.error(_);
        return "[invalid data]";
    }
}

module.exports = {
    add,
    formater,
};
