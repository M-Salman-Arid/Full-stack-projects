
export const formatViews = (views) => {

    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1) + "B";
    }

    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + "M";
    }

    if (views >= 1000) {
        return (views / 1000).toFixed(1) + "K";
    }

    return views;
};


export const timeAgo = (date) => {

    const now = new Date();

    const uploaded = new Date(date);

    const seconds = Math.floor((now - uploaded) / 1000);

    const minutes = Math.floor(seconds / 60);

    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);

    const months = Math.floor(days / 30);

    const years = Math.floor(days / 365);

    if (seconds < 60) return "Just now";

    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;

    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

    return `${years} year${years > 1 ? "s" : ""} ago`;

};