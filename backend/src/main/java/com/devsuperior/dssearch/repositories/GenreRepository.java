package com.devsuperior.dssearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dssearch.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
