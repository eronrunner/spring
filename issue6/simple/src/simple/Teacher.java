package simple;

public class Teacher extends Account {
	
	private String code;
	private String firstName;
	private String lastName;
	private String address;
	
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Teacher(String userName, String password, String registeredEmail
			,String code, String firstName, String lastName, String address) {
		super(userName, password, registeredEmail);
		this.code = code;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		// TODO Auto-generated constructor stub
	}
	public Teacher(String code, String firstName, String lastName, String address) {
		super();
		this.code = code;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
	}
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

    @Override
    public String toString() {
        return "Teacher{" +
                "code='" + code + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
