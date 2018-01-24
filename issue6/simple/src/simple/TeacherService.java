package simple;

public class TeacherService implements TeacherDo {

	@Override
	public void login(Account acc) {
		System.out.println("Account: " + acc.getUserName() + " login");
	}

	@Override
	public void logout(Account acc) {
		System.out.println("Account: " + acc.getUserName() + " logout");
	}

	@Override
	public void recordScores(Teacher teacher) {
		System.out.println(teacher.toString() + " recorded scores");
	}

	@Override
	public void createCoursePlanning(Teacher teacher) {
		System.out.println(teacher.toString() + " created course planning");
	}

}
