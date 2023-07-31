const getListStudents = require('./0-get_list_students');

function getListStudentIds(studArg) {
  if (!Array.isArray(studArg)) {
    return [];
  }

  return studArg.map(student => student.id);
}

module.exports = getListStudentIds;
