package com.cbw.tupac.service;

import java.util.List;

import com.cbw.tupac.model.Album;
import com.cbw.tupac.model.Purchase;

public interface TupacService {

	//앨범 목록 및 굿즈 목록을 DB에 저장
	Album saveAlbum(Album album);
	//앨범의 모든 정보를 가져옴.
	List<Album> getAllAlbums();
	//앨범 하나의 정보만을 가져온다.
	Album getAlbumById(long id);
	//id로 해당 앨범 정보를 업데이트
	Album updateAlbumById(Album album, long id);
	//앨범의 정보를 삭제
	void deleteAlbumById(long id);
	//카트에 담긴 목록을 구매 후 저장하기
	Purchase savePurchase(Purchase purchase);
	List<Purchase> getAllPurchase();
	List<Purchase> getPurchaseById(String loginId);
}
