package com.cbw.tupac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cbw.tupac.model.Album;

public interface TupacRepository extends JpaRepository<Album, Long>{

}
