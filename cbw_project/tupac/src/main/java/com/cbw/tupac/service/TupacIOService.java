package com.cbw.tupac.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.cbw.tupac.model.Album;
import com.cbw.tupac.repository.TupacRepository;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;

import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;

@Service
public class TupacIOService {
	@Autowired
	private TupacRepository tupacRepository;
	
	@Value("classpath:musicjson.json")
	private Resource jsonFile;
	
	@PostConstruct
    public void initialize() {
        processJsonData(jsonFile);
    }

    @Transactional
    public void processJsonData(Resource fileResource) {
        try {
            InputStream inputStream = fileResource.getInputStream();
            
            if (tupacRepository.count() == 0) {
            	List<Album> dataList = readJsonData(inputStream);
                tupacRepository.saveAll(dataList);
            } else {
                System.out.println("테이블에 데이터가 있을 경우 저장하지 않습니다");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private List<Album> readJsonData(InputStream inputStream) throws IOException {
        List<Album> dataList = new ArrayList();

        try (JsonReader jsonReader = new JsonReader(new InputStreamReader(inputStream))) {
            jsonReader.beginArray();

            while (jsonReader.hasNext()) {
                Album data = new Gson().fromJson(jsonReader, Album.class);
                dataList.add(data);
            }

            jsonReader.endArray();
        }

        return dataList;
    }
}
