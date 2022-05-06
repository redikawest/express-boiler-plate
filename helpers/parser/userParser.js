exports.createParser = (data) => {

    if (data === null) {
        return null
    }

    return {
        id      : data.id,
        name    : data.name,
        email   : data.email,
        phone   : data.phone,
        status  : data.status
    }
}