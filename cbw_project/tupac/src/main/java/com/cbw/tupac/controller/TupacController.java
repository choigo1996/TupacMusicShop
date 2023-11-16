package com.cbw.tupac.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbw.tupac.model.Album;
import com.cbw.tupac.model.Purchase;
import com.cbw.tupac.service.TupacService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins="http://localhost:3000", 
methods= {RequestMethod.GET, RequestMethod.POST})
public class TupacController {
	private TupacService tupacService;
	@Autowired
	public TupacController(TupacService tupacService) {
		super();
		this.tupacService = tupacService;
	}
	//1.앨범 목록을 DB에 저장
	@PostMapping()
	public ResponseEntity<Album> saveAlbum(@RequestBody Album album){
		return new ResponseEntity<Album>(
				tupacService.saveAlbum(album),HttpStatus.CREATED);
	}
	//2.앨범의 모든 정보를 가져온다.
	@GetMapping()
	public ResponseEntity<List<Album>> getAllAlbums() {
		return new ResponseEntity<List<Album>>(
				tupacService.getAllAlbums(), HttpStatus.OK);
	}
	//3.앨범 하나의 정보만을 가져온다.
	@GetMapping("{id}")
	public ResponseEntity<Album> getAlbumById(@PathVariable long id) {
		return new ResponseEntity<Album>(
				tupacService.getAlbumById(id), HttpStatus.OK);
	}
	//4.id로 해당 정보를 업데이트
	@PutMapping("{id}")
	public ResponseEntity<Album> updateAlbumById(
			@RequestBody Album album, @PathVariable long id){
		return new ResponseEntity<Album>(
				tupacService.updateAlbumById(album, id), HttpStatus.OK);
	}
	//5.앨범의 정보를 삭제
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteAlbumById(@PathVariable long id){
		return  new ResponseEntity<String>(
				"Successfully deleted!", HttpStatus.OK);
	}
	//6.카트에 담긴 목록을 구매 후 저장하기
	@PostMapping("purchase")
	public ResponseEntity<Purchase> savePurchase(@RequestBody Purchase purchase){
		return new ResponseEntity<Purchase>(
				tupacService.savePurchase(purchase),HttpStatus.OK);
	}
	@PostMapping("purchaselist")
	public ResponseEntity<List<Purchase>> savePurchaseList(
			@RequestBody List<Purchase> purchaseList) {
		List<Purchase> savedPurchaseList = new ArrayList<Purchase>();
		for (Purchase purchase : purchaseList) {
			savedPurchaseList.add(tupacService.savePurchase(purchase));
		}
		return new ResponseEntity<List<Purchase>>(savedPurchaseList, HttpStatus.OK);
	}
	
	@GetMapping("purchase")
	public ResponseEntity<List<Purchase>> getAllPurchase() {
		return new ResponseEntity<List<Purchase>>(
				tupacService.getAllPurchase(), HttpStatus.OK);
	}
	
	@GetMapping("purchase/{loginId}")
	public ResponseEntity<List<Purchase>> getPurchaseById(@PathVariable String loginId) {
		return new ResponseEntity<List<Purchase>>(
				tupacService.getPurchaseById(loginId), HttpStatus.OK);
	}
	
}
