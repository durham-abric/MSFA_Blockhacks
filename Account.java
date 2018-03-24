package blockhacks;
//import com.sun.xml.internal.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;

public class Account {
	enum Type{
		Netflix, Spotify;
	}
	
	Type type;
	int numSubscriptions;
	Subscription[] subs;
	User owner;
	
	public Account (Type type, int numUsers) {
		this.type = type;
		this.numSubscriptions=numUsers;
		this.subs = new Subscription[numUsers];
		for(int i=0; i<numUsers; i++) {
			Matching.getInstance().addSubscription(subs[i], false);
		}
	}
	
	public Type getType() {
		return this.type;
	}

}
