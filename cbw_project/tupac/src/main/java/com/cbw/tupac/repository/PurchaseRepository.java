package com.cbw.tupac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cbw.tupac.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long>{

	List<Purchase> findByLoginId(String loginId);
}
