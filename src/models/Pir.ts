import { getDatabase, ref, set } from "firebase/database";
import { Chapter } from "./Chapter";
import * as admin from "firebase-admin";

const db = getDatabase();

export class Pir {
    pirId: any;
    editorId: any;
    name: string | any;
    description: string;
    chapters: Chapter[]

    constructor(
        editorId: any,
        name: string | any,
        description: string,
        chapters: Chapter[]
    ) {
        this.editorId = editorId
        this.name = name
        this.description = description
        this.chapters = chapters

    }

    async createPir(pir: Pir) {
        await set(ref(db, 'pir/' + pir.pirId), {
            pirId: pir.pirId,
            name: pir.name,
            description: pir.description,
            editorId: pir.editorId,
        });
        await set(ref(db, 'pir/' + pir.pirId + '/chapters/' + pir.chapters[0].chapterId + '/'), pir.chapters[0]
        );

    }

    async addChapterToPir(chapter: Chapter) {
        await set(ref(db, 'pir/' + chapter.pirId + '/chapters/' + chapter.chapterId), {
            chapterName: chapter.chapterName,
            chapterContent: chapter.chapterContent,
            editorId: chapter.editorId,
            pirId: chapter.pirId,
            createDate: chapter.createDate,
            chapterId: chapter.chapterId
        });

        // await set(ref(db, 'users/' + pir.editorId + '/works/pirs/' + pir.pirId), { pir: pir.pirId });
    }

    async retrievePirs() {
        // Get a reference to the desired node in the database
        const nodeRef = admin.database().ref('pir');
        // Read the data at the node once
        return nodeRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                // access the data from the snapshot if it exists
                const data = snapshot.val();
                return data

            } else {
                return null
            }
        }, (error) => {
            return { error: error }
        });
    }

};