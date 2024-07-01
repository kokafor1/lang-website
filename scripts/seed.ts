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
                title: "Nigerian",
                imageSrc: "/nr.png",
            },
            {
                id: 2,
                title: "Spanish",
                imageSrc: "/es.svg",
            },
            {
                id: 3,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/hr.svg",
            },
            {
                id: 5,
                title: "French",
                imageSrc: "/fr.svg",
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
              question: 'Who is the president?',
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
                correct: false,
                text: "Joe biden",
                audioSrc: "/Joeb.mp3",
            },
            {
                challengeId: 5,
                correct: true,
                text: "Bola Ahmed Tinubu",
                audioSrc: "/wpres.mp3",
            },
            {
                challengeId: 5,
                correct: false,
                text: "Hakeem Olajuwon",
                audioSrc: "/hkeem.mp3",
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

        console.log("Seeding finished")
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();