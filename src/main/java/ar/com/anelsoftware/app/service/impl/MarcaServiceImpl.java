package ar.com.anelsoftware.app.service.impl;

import ar.com.anelsoftware.app.service.MarcaService;
import ar.com.anelsoftware.app.domain.Marca;
import ar.com.anelsoftware.app.repository.MarcaRepository;
import ar.com.anelsoftware.app.repository.search.MarcaSearchRepository;
import ar.com.anelsoftware.app.service.dto.MarcaDTO;
import ar.com.anelsoftware.app.service.mapper.MarcaMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Marca.
 */
@Service
@Transactional
public class MarcaServiceImpl implements MarcaService {

    private final Logger log = LoggerFactory.getLogger(MarcaServiceImpl.class);

    private final MarcaRepository marcaRepository;

    private final MarcaMapper marcaMapper;

    private final MarcaSearchRepository marcaSearchRepository;

    public MarcaServiceImpl(MarcaRepository marcaRepository, MarcaMapper marcaMapper, MarcaSearchRepository marcaSearchRepository) {
        this.marcaRepository = marcaRepository;
        this.marcaMapper = marcaMapper;
        this.marcaSearchRepository = marcaSearchRepository;
    }

    /**
     * Save a marca.
     *
     * @param marcaDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public MarcaDTO save(MarcaDTO marcaDTO) {
        log.debug("Request to save Marca : {}", marcaDTO);
        Marca marca = marcaMapper.toEntity(marcaDTO);
        marca = marcaRepository.save(marca);
        MarcaDTO result = marcaMapper.toDto(marca);
        marcaSearchRepository.save(marca);
        return result;
    }

    /**
     * Get all the marcas.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<MarcaDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Marcas");
        return marcaRepository.findAll(pageable)
            .map(marcaMapper::toDto);
    }


    /**
     * Get one marca by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MarcaDTO> findOne(Long id) {
        log.debug("Request to get Marca : {}", id);
        return marcaRepository.findById(id)
            .map(marcaMapper::toDto);
    }

    /**
     * Delete the marca by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Marca : {}", id);
        marcaRepository.deleteById(id);
        marcaSearchRepository.deleteById(id);
    }

    /**
     * Search for the marca corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<MarcaDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Marcas for query {}", query);
        return marcaSearchRepository.search(queryStringQuery(query), pageable)
            .map(marcaMapper::toDto);
    }
}
