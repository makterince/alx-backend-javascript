const getListStudents = require('./0-get_list_students');

function getStudentsByLocation(studArg, city) {
	if (!Array.isArray(studArg)) {
		return [];
	}
	return studArg.filter(student => student.location === city);
}

module.exports = getStudentsByLocation;
