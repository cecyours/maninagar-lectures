// Simulating a fake backend with delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const addUserApi = async (user) => {
    await delay(1000); // simulate network delay
    return { ...user, id: Date.now() }; // fake ID assignment
};

export const removeUserApi = async (userId) => {
    await delay(1000); // simulate delay
    return userId; // just return what we "deleted"
};
