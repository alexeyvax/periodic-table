// const en = require("../src/context/Data/PeriodicTable-en.json");
const ru = require("../src/context/Data/PeriodicTable-ru.json");

function checkIsLink(link) {
    return typeof link === "string" && link;
}

async function makeRequest(link) {
    try {
        const response = await fetch(link, { method: 'HEAD' });

        return response;
    } catch (error) {
        return link;
    }
}

function fakeTimer(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

async function checkLinksAvailability(links) {
    const brokenLinks = [];

    for (const link of links) {
        const response = await makeRequest(link);

        console.log(response.status, "-", link);

        if (response && response.status !== 200) {
            brokenLinks.push(link);
        }

        await fakeTimer(500);
    }

    console.log(links.length, " all links length");
    console.log(brokenLinks, " brokenLinks");
}

function getLinksForCheck(data) {
    const linksForCheck = [];

    data.forEach((item) => {
        const {
            discovered_by_links,
            naming_links,
            source,
            bohr_model_image,
            bohr_model_3d,
            spectral_img,
            image: { url }
        } = item;

        if (Array.isArray(discovered_by_links)) {
            discovered_by_links.forEach((link) => {
                if (checkIsLink(link)) {
                    linksForCheck.push(link);
                }
            });
        }
        if (Array.isArray(naming_links)) {
            naming_links.forEach((link) => {
                if (checkIsLink(link)) {
                    linksForCheck.push(link);
                }
            });
        }

        if (checkIsLink(source)) {
            linksForCheck.push(source);
        }
        if (checkIsLink(bohr_model_image)) {
            linksForCheck.push(bohr_model_image);
        }
        if (checkIsLink(bohr_model_3d)) {
            linksForCheck.push(bohr_model_3d);
        }
        if (checkIsLink(spectral_img)) {
            linksForCheck.push(spectral_img);
        }
        if (checkIsLink(url)) {
            linksForCheck.push(url);
        }
    });

    return linksForCheck;
}

// const linksForCheckEnLocale = getLinksForCheck(en);
const linksForCheckRuLocale = getLinksForCheck(ru);

// checkLinksAvailability(linksForCheckEnLocale);
checkLinksAvailability(linksForCheckRuLocale);
