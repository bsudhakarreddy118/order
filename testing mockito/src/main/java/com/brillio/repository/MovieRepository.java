package com.brillio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brillio.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	// QueryMethods
	// private String movieName
	Movie findByMovieName(String name);
}
