package ar.com.anelsoftware.app.repository.search;

import ar.com.anelsoftware.app.domain.Categoria;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Categoria entity.
 */
public interface CategoriaSearchRepository extends ElasticsearchRepository<Categoria, Long> {
}
