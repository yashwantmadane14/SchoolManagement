const Student = require('../models/student.model')


//api to create students 
exports.createstudent = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//api to get all students
exports.getallstudents = async (req, res) => {
    try {
        const all_students = await Student.find()
        res.send(all_students)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}



//api to get one student by name
exports.getonestudent = async (req, res) => {
    const name = req.params.name;
    try {
        const student = await Student.findOne({ name })
        if (!student) return res.status(404).send("User not found")
        res.send(student)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

// api to delete student by id
exports.deletestudent = async (req, res) => {
    try {
        const { id } = req.params //always use this syntax for delete by id mdoe
        const deletestudent = await Student.findByIdAndDelete(id)
        if (!deletestudent) return res.status(404).send("User Not Found")
        res.json({ message: 'Student deleted successfully', deletestudent });
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}



// api to delete all student 
exports.deleteallstudent = async (req, res) => {
    try {
        const deleteallstudent = await Student.deleteMany({})
        res.json({ message: 'All Students deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//api to update student by id
exports.updatestudent = async (req, res) => {
    const { id } = req.params //always use this syntax for delete by id mdoe
    const newData = req.body
    try {
        const updatestudent = await Student.findByIdAndUpdate(id, newData, { new: true })
        if (!updatestudent) return res.status(404).send("User Not Found")
        res.json({ message: 'Student updates successfully', updatestudent });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}