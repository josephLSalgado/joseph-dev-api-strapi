'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const home = await strapi.services.home.find(ctx.query);

        home.socials.sort(function (a,b) {
            if (a.name > b.name) {
                return 1;
            }
              if (a.name < b.name) {
                return -1;
            }
              // a must be equal to b
              return 0;
        });

        home.experiences.sort(function (a,b) {
            if (a.startDate < b.startDate) {
                return 1;
            }
              if (a.startDate > b.startDate) {
                return -1;
            }
              // a must be equal to b
              return 0;
        });

        home.educations.sort(function (a,b) {
            if (a.startDate < b.startDate) {
                return 1;
            }
              if (a.startDate > b.startDate) {
                return -1;
            }
              // a must be equal to b
              return 0;
        });

        home.certificates.sort(function (a,b) {
            if (a.date < b.date) {
                return 1;
            }
              if (a.date > b.date) {
                return -1;
            }
              // a must be equal to b
              return 0;
        });

        home.skills.sort(function (a,b) {
            if (a.percentage < b.percentage) {
                return 1;
            }
              if (a.percentage > b.percentage) {
                return -1;
            }
              // a must be equal to b
              return 0;
        });

        return (
            {
                avatar : home.avatar.url,
                name : home.name,
                profession : home.profession,
                bio : home.bio,
                address : home.address,
                social : home.socials.map(itemSocial => (
                    {
                        id : itemSocial.id,
                        name : itemSocial.name,
                        url : itemSocial.url
                    }
                )),
                experience : home.experiences.map(itemExp => (
                    {
                        id : itemExp.id,
                        jobTitle : itemExp.jobTitle,
                        company : itemExp.company,
                        startDate : itemExp.startDate,
                        endDate : itemExp.endDate,
                        jobDescription : itemExp.jobDescription
                    }
                )),
                education : home.educations.map(itemEdu => (
                    {
                        id : itemEdu.id,
                        degree : itemEdu.degree,
                        institution : itemEdu.institution,
                        startDate : itemEdu.startDate,
                        endDate : itemEdu.endDate,
                        description : itemEdu.description
                    }
                )),
                certificate : home.certificates.map(itemCert => (
                    {
                        id : itemCert.id,
                        name : itemCert.name,
                        institution : itemCert.institution,
                        date : itemCert.date,
                        description : itemCert.description
                    }
                )),
                skills : home.skills.map(itemSkill => (
                    {
                        id : itemSkill.id,
                        name : itemSkill.name,
                        percentage : itemSkill.percentage
                    }
                ))
            }
        )
    }
};
