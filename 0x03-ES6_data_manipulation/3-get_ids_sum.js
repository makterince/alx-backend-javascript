const getListStudents = require('./0-get_list_students');

function getStudentIdsSum(studArg) {
	if (!Array.isArray(studArg)) {
		return 0;
	}

	return studArg.reduce((sum, student) => sum + student.id, 0);
}

module.exports = getStudentIdsSum;
