const pgPromise = require("pg-promise");

class Member {
    constructor() {
        this.db = pgPromise("postgresql://localhost:5432/dingco");
    }
    create(member) {
        let name = member.name;
        let phone_number = member.phone_number;
        let week_day = member.week_day;
        let equipment_yn = member.equipment_yn;
        let coding_yn = member.coding_yn;
        let question = member.question;

        return this.db
            .any(`INSERT INTO init_survey (name, phone_number, week_day, equipment_yn, coding_yn, question) VALUES (
                ${name}, 
                ${phone_number}, 
                ${week_day}, 
                ${equipment_yn},
                ${coding_yn},
                ${question})
                `);
    }
}
