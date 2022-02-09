package com.devsuperior.dssearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dssearch.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
