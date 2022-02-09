package com.devsuperior.dssearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dssearch.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
