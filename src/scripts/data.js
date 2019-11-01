const url = "http://localhost:8088/entries"

const API = {
    getJournalEntries() {
        return fetch(`${url}`)
            .then(response => response.json())
    },
    saveJournalEntry(journalEntryObject) {
        fetch(`${url}`, { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryObject)
        })
    },
    deleteEntry(journalEntryid) {
        return fetch(`http://localhost:8088/entries/${journalEntryid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editEntry(journalEntryid) {
        return fetch(`http://localhost:8088/entries/${journalEntryid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryid)
        })

    }
}

export default API