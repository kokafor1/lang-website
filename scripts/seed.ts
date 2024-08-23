import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Igbo",
                imageSrc: "/nr.png",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, //nigerian
                title: "Unit 1",
                description: "Learn the basics of Igbo",
                order: 1,
            },
        ]);


        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Verbs",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Verbs",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verbs",
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "Verbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the boy"?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                order: 2,
                question: '"the girl"',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the zombie"?',
            },
        ]);


        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                imageSrc: "/boy.svg",
                correct: true,
                text: "nwa nwoke",
                audioSrc: "/nr_boy.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/girl.svg",
                correct: false,
                text: "nwa agbọghọ ahụ",
                audioSrc: "/nr_girl.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/zombie.svg",
                correct: false,
                text: "zombie",
                audioSrc: "/zombie.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: false,
                text: "nwa nwoke",
                audioSrc: "/nr_boy.mp3",
            },
            {
                challengeId: 2,
                correct: true,
                text: "nwa agbọghọ ahụ",
                audioSrc: "/nr_girl.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "zombie",
                audioSrc: "/zombie.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                imageSrc: "/boy.svg",
                correct: false,
                text: "nwa nwoke",
                audioSrc: "/nr_boy.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/girl.svg",
                correct: false,
                text: "nwa agbọghọ ahụ",
                audioSrc: "/nr_girl.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/zombie.svg",
                correct: true,
                text: "zombie",
                audioSrc: "/zombie.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
              id: 4,
              lessonId: 2, // Verbs
              type: "SELECT",
              order: 1,
              question: 'How do you say hello?',
            },
            {
              id: 5,
              lessonId: 2, // Verbs
              type: "ASSIST",
              order: 2,
              question: 'How do you say goodbye?',
            },
            {
              id: 6,
              lessonId: 2, // Verbs
              type: "SELECT",
              order: 3,
              question: 'How do you say good morning?',
            },
          ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 4,
                correct: false,
                text: "Ka ọ dị",
                audioSrc: "/goodbye.mp3",
            },
            {
                challengeId: 4,
                correct: false,
                text: "ka ahụ ma emechaa",
                audioSrc: "/seeulater.mp3",
            },
            {
                challengeId: 4,
                correct: true,
                text: "Nnọọ",
                audioSrc: "/hello.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 5,
                correct: true,
                text: "Ka ọ dị",
                audioSrc: "/goodbye.mp3",
            },
            {
                challengeId: 5,
                correct: false,
                text: "ka ahụ ma emechaa",
                audioSrc: "/seeulater.mp3",
            },
            {
                challengeId: 5,
                correct: false,
                text: "Nnọọ",
                audioSrc: "/hello.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 6,
                correct: true,
                text: "ụtụtụ ọma",
                audioSrc: "/gmorn.mp3",
            },
            {
                challengeId: 6,
                correct: false,
                text: "ka chifoo",
                audioSrc: "/gnight.mp3",
            },
            {
                challengeId: 6,
                correct: false,
                text: "ehihie ọma",
                audioSrc: "/gafter.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
              id: 7,
              lessonId: 3, // Verbs
              type: "SELECT",
              order: 1,
              question: 'How do you say outside?',
            },
            {
                id: 8,
                lessonId: 3, // Verbs
                type: "SELECT",
                order: 2,
                question: 'How do you say inside?',
            },
            {
                id: 9,
                lessonId: 3, // Verbs
                type: "SELECT",
                order: 3,
                question: 'How do you say above?',
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 7,
                correct: true,
                text: "n'èzí",
                audioSrc: "/n'èzí.mp3",
            },
            {
                challengeId: 7,
                correct: false,
                text: "n'ime",
                audioSrc: "/n'ime.mp3",
            },
            {
                challengeId: 7,
                correct: false,
                text: "n'elu",
                audioSrc: "/n'elu.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 8,
                correct: false,
                text: "n'èzí",
                audioSrc: "/n'èzí.mp3",
            },
            {
                challengeId: 8,
                correct: true,
                text: "n'ime",
                audioSrc: "/n'ime.mp3",
            },
            {
                challengeId: 8,
                correct: false,
                text: "n'elu",
                audioSrc: "/n'elu.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 9,
                correct: false,
                text: "n'èzí",
                audioSrc: "/n'èzí.mp3",
            },
            {
                challengeId: 9,
                correct: false,
                text: "n'ime",
                audioSrc: "/n'ime.mp3",
            },
            {
                challengeId: 9,
                correct: true,
                text: "n'elu",
                audioSrc: "/n'elu.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
              id: 10,
              lessonId: 4, // Verbs
              type: "SELECT",
              order: 1,
              question: 'How do you say shirt?',
            },
            {
                id: 11,
                lessonId: 4, // Verbs
                type: "SELECT",
                order: 2,
                question: 'How do you say pants?',
            },
            {
                id: 12,
                lessonId: 4, // Verbs
                type: "SELECT",
                order: 3,
                question: 'How do you say shorts?',
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 10,
                correct: false,
                text: "uwe elu",
                audioSrc: "/shirt.mp3",
            },
            {
                challengeId: 10,
                correct: false,
                text: "uwe ogologo ọkpa",
                audioSrc: "/pants.mp3",
            },
            {
                challengeId: 10,
                correct: true,
                text: "mkpirisi",
                audioSrc: "/shorts.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 11,
                correct: false,
                text: "uwe elu",
                audioSrc: "/shirt.mp3",
            },
            {
                challengeId: 11,
                correct: true,
                text: "uwe ogologo ọkpa",
                audioSrc: "/pants.mp3",
            },
            {
                challengeId: 11,
                correct: false,
                text: "mkpirisi",
                audioSrc: "/shorts.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 12,
                correct: true,
                text: "uwe elu",
                audioSrc: "/shirt.mp3",
            },
            {
                challengeId: 12,
                correct: false,
                text: "uwe ogologo ọkpa",
                audioSrc: "/pants.mp3",
            },
            {
                challengeId: 12,
                correct: false,
                text: "mkpirisi",
                audioSrc: "/shorts.mp3",
            },
        ]);
        await db.insert(schema.challenges).values([
            {
              id: 13,
              lessonId: 5, // Verbs
              type: "SELECT",
              order: 1,
              question: 'How do you say I love you?',
            },
            {
                id: 14,
                lessonId: 5, // Verbs
                type: "SELECT",
                order: 2,
                question: 'How do you say I hate you?',
            },
            {
                id: 15,
                lessonId: 5, // Verbs
                type: "SELECT",
                order: 3,
                question: 'How do you say I miss you?',
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 13,
                correct: false,
                text: "akpọrọ gị m asị",
                audioSrc: "/ihy.mp3",
            },
            {
                challengeId: 13,
                correct: false,
                text: "a na m atụ ụche gị",
                audioSrc: "/imy.mp3",
            },
            {
                challengeId: 13,
                correct: true,
                text: "a hụrụ m gị n'anya",
                audioSrc: "/ily.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 14,
                correct: false,
                text: "a na m atụ ụche gị",
                audioSrc: "/imy.mp3",
            },
            {
                challengeId: 14,
                correct: true,
                text: "akpọrọ gị m asị",
                audioSrc: "/ihy.mp3",
            },
            {
                challengeId: 14,
                correct: false,
                text: "a hụrụ m gị n'anya",
                audioSrc: "/ily.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 15,
                correct: false,
                text: "a na m atụ ụche gị",
                audioSrc: "/imy.mp3",
            },
            {
                challengeId: 15,
                correct: false,
                text: "akpọrọ gị m asị",
                audioSrc: "/ihy.mp3",
            },
            {
                challengeId: 15,
                correct: true,
                text: "a hụrụ m gị n'anya",
                audioSrc: "/ily.mp3",
            },
        ]);
        await db.insert(schema.challenges).values([
            {
              id: 16,
              lessonId: 6, // Verbs
              type: "SELECT",
              order: 1,
              question: 'How do you say white?',
            },
            {
                id: 17,
                lessonId: 6, // Verbs
                type: "SELECT",
                order: 2,
                question: 'How do you say black?',
            },
            {
                id: 18,
                lessonId: 6, // Verbs
                type: "SELECT",
                order: 3,
                question: 'How do you say brown?',
            },
            {
                id: 19,
                lessonId: 6, // Verbs
                type: "SELECT",
                order: 4,
                question: 'How do you say blue?',
            },
            {
                id: 20,
                lessonId: 6, // Verbs
                type: "SELECT",
                order: 5,
                question: 'How do you say red?',
            },{
                id: 21,
                lessonId: 6, // Verbs
                type: "SELECT",
                order: 6,
                question: 'How do you say green?',
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 16,
                correct: true,
                text: "ọcha",
                audioSrc: "/white.mp3",
            },
            {
                challengeId: 16,
                correct: false,
                text: "nwa",
                audioSrc: "/black.mp3",
            },
            {
                challengeId: 16,
                correct: false,
                text: "agba aja aja",
                audioSrc: "/brown.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 17,
                correct: false,
                text: "agba aja aja",
                audioSrc: "/brown.mp3",
            },
            {
                challengeId: 17,
                correct: false,
                text: "ọcha",
                audioSrc: "/white.mp3",
            },
            {
                challengeId: 17,
                correct: true,
                text: "nwa",
                audioSrc: "/black.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 18,
                correct: true,
                text: "agba aja aja",
                audioSrc: "/brown.mp3",
            },
            {
                challengeId: 18,
                correct: false,
                text: "ọcha",
                audioSrc: "/white.mp3",
            },
            {
                challengeId: 18,
                correct: false,
                text: "nwa",
                audioSrc: "/black.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 19,
                correct: false,
                text: "akwụkwọ ndụ akwụkwọ ndụ",
                audioSrc: "/green.mp3",
            },
            {
                challengeId: 19,
                correct: true,
                text: "uhie",
                audioSrc: "/red.mp3",
            },
            {
                challengeId: 19,
                correct: false,
                text: "acha anụnụ anụnụ",
                audioSrc: "/blue.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 20,
                correct: false,
                text: "akwụkwọ ndụ akwụkwọ ndụ",
                audioSrc: "/green.mp3",
            },
            {
                challengeId: 20,
                correct: false,
                text: "uhie",
                audioSrc: "/red.mp3",
            },
            {
                challengeId: 20,
                correct: true,
                text: "acha anụnụ anụnụ",
                audioSrc: "/blue.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 21,
                correct: true,
                text: "akwụkwọ ndụ akwụkwọ ndụ",
                audioSrc: "/green.mp3",
            },
            {
                challengeId: 21,
                correct: false,
                text: "uhie",
                audioSrc: "/red.mp3",
            },
            {
                challengeId: 21,
                correct: false,
                text: "acha anụnụ anụnụ",
                audioSrc: "/blue.mp3",
            },
        ]);

        console.log("Seeding finished")
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();