package com.cbw.tupac.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cbw.tupac.model.Album;
import com.cbw.tupac.model.Purchase;
import com.cbw.tupac.repository.PurchaseRepository;
import com.cbw.tupac.repository.TupacRepository;
import com.cbw.tupac.service.TupacService;

@Service
public class TupacServiceImpl implements TupacService{

	private TupacRepository tupacRepository;
	private PurchaseRepository purchaseRepository;
	
	public TupacServiceImpl(TupacRepository tupacRepository,PurchaseRepository purchaseRepository) {
		super();
		this.tupacRepository = tupacRepository;
		this.purchaseRepository = purchaseRepository;
	}

	//1.앨범 목록을 DB에 저장
	@Override
	public Album saveAlbum(Album album) {
		return tupacRepository.save(album);
	}
	//2.앨범의 모든 정보를 가져온다.
	@Override
	public List<Album> getAllAlbums() {
		return tupacRepository.findAll();
	}
	//3.앨범 하나의 정보만을 가져온다.
	@Override
	public Album getAlbumById( long id ) {
		return tupacRepository.findById(id).orElseThrow(()->null);
	}
	//4.id로 해당 정보를 업데이트
	@Override
	public Album updateAlbumById(Album album, long id) {
		Album existingAlbum = tupacRepository.findById(id).orElseThrow(()->null);
		existingAlbum.setImage(album.getImage());
		existingAlbum.setPrice(album.getPrice());
		existingAlbum.setRelease_date(album.getRelease_date());
		existingAlbum.setTitle(album.getTitle());
		existingAlbum.setTrack(album.getTrack());
		tupacRepository.save(existingAlbum);
		return existingAlbum;	
		}
	//5.앨범의 정보를 삭제
	@Override
	public void deleteAlbumById(long id) {
		tupacRepository.findById(id).orElseThrow(()->null);
		tupacRepository.deleteById(id);
	}

	//6.카트에 담긴 목록을 구매 후 저장하기
	@Override
	public Purchase savePurchase(Purchase purchase) {
		return purchaseRepository.save(purchase);
	}

	@Override
	public List<Purchase> getAllPurchase() {
		return purchaseRepository.findAll();
	}

	@Override
	public List<Purchase> getPurchaseById(String loginId) {
		return purchaseRepository.findByLoginId(loginId);
	}
	
}
