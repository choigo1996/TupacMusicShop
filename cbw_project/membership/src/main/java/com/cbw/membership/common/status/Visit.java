package com.cbw.membership.common.status;

public enum Visit {
	LOCAL("내국인"),
	FOREIGNER("외국인");
	
	private final String desc;

	private Visit(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}
	
	
}
