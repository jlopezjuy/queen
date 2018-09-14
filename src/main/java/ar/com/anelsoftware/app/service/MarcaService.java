package ar.com.anelsoftware.app.service;

import ar.com.anelsoftware.app.service.dto.MarcaDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Marca.
 */
public interface MarcaService {

    /**
     * Save a marca.
     *
     * @param marcaDTO the entity to save
     * @return the persisted entity
     */
    MarcaDTO save(MarcaDTO marcaDTO);

    /**
     * Get all the marcas.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<MarcaDTO> findAll(Pageable pageable);


    /**
     * Get the "id" marca.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<MarcaDTO> findOne(Long id);

    /**
     * Delete the "id" marca.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the marca corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<MarcaDTO> search(String query, Pageable pageable);
}
