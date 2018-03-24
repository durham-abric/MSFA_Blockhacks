package blockhacks;

public class Subscription {
	enum Type {
		Netflix, Spotify;
	}
	
	Type type;
	
	public Subscription (Type type) {
		this.type = type;
	}
	
	public Type getType() {
		return this.type;
	}

}
